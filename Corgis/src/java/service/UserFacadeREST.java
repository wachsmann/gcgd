/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import domine.User;
import java.lang.annotation.AnnotationFormatError;
import java.util.List;
import java.util.Set;
import javax.ejb.Stateless;
import javax.json.JsonArrayBuilder;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.ValidationException;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import static javax.ws.rs.client.Entity.json;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Variant;
import org.json.simple.JSONObject;
import util.Criptografia;
import validation.userValidator;

/**
 *
 * @author wachsmann
 */
@Stateless
@Path("public/user")
public class UserFacadeREST extends AbstractFacade<User> {

    @PersistenceContext(unitName = "CorgisPU")
    private EntityManager em;
    private userValidator uv = new userValidator();

    public UserFacadeREST() {
        super(User.class);
    }

    @POST
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})    
    public Response createUser(User entity) {
        entity.setPassword(Criptografia.criptografar(entity.getPassword()));
        if (uv.validate(entity) == "ok") {
            em.persist(entity);
            return Response.ok().build();
        }
        return Response.status(422, uv.validate(entity)).build();
    }

    @PUT
    @Path("{id}")
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public void edit(@PathParam("id") Long id, User entity) {
        super.edit(entity);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Long id) {
        super.remove(super.find(id));
    }
    @PUT
     @Path("/login")
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response login(User entity) {
       try{
         User usuario = 
         (User) this.em.createNamedQuery("filtro_login")
                 .setParameter("email", entity.getName())
                 .setParameter("password", Criptografia.criptografar(entity.getPassword()))
                 .getSingleResult();
        JSONObject obj = new JSONObject();

        obj.put("user", usuario);
        obj.put("token", Criptografia.tokenEncrypt(usuario.getName(), usuario.getPassword()));
    
        return Response.ok(obj, MediaType.APPLICATION_JSON).build();
        
        } catch(NoResultException e) {
            return Response.status(406,e.getMessage()).build();
        }
    }
    @GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public User find(@PathParam("id") Long id) {
        return super.find(id);
    }

    @GET
    @Override
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<User> findAll() {
        return super.findAll();
    }

    @GET
    @Path("{from}/{to}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<User> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
        return super.findRange(new int[]{from, to});
    }

    @GET
    @Path("count")
    @Produces(MediaType.TEXT_PLAIN)
    public String countREST() {
        return String.valueOf(super.count());
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

}
