/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import domine.User;
import java.util.List;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.ParameterExpression;
import javax.persistence.criteria.Root;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.core.Context;

/**
 *
 * @author 1978233
 */
public abstract class AuthenticatedFacade<T> extends AbstractFacade<T> {
    
    @Context
    protected HttpServletRequest request;
    
    private User user;
    
    public AuthenticatedFacade(Class<T> entityClass) {
        super(entityClass);
        
    }
    
    protected User obterUsuario(){
        if (request != null && user == null){
            this.user = (User) request.getAttribute("user");        
        }
        return this.user;
    }
    
    public T find(Object id) {
        obterUsuario();
        CriteriaBuilder cb = getEntityManager().getCriteriaBuilder();
        
        javax.persistence.criteria.CriteriaQuery cq = cb.createQuery(entityClass);
        
        Root<T> c = cq.from(entityClass);
        cq.select(c);
        ParameterExpression<User> pUsuario = cb.parameter(User.class,"proprietario");
        ParameterExpression<Long> pId = cb.parameter(Long.class,"id");
        cq.where(
            cb.equal(c.get("id"), pUsuario),
            cb.equal(c.get("proprietario"), pId)
        );        
        javax.persistence.Query q = getEntityManager().createQuery(cq).setParameter("id", id).setParameter("proprietario", user);
        return (T) q.getSingleResult();
    }
    
    public List<T> findAll() {
        obterUsuario();
        
        CriteriaBuilder cb = getEntityManager().getCriteriaBuilder();
        
        javax.persistence.criteria.CriteriaQuery cq = cb.createQuery(entityClass);
        Root<T> c = cq.from(entityClass);
        cq.select(c);
        
        ParameterExpression<User> parameter = cb.parameter(User.class, "proprietario");
        cq.where(cb.equal(c.get("proprietario"), parameter));

        javax.persistence.Query q = getEntityManager().createQuery(cq).setParameter("proprietario", user);
        return (List<T>) q.getResultList();
    }
    
    
}
