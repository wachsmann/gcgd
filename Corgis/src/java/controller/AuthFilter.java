/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import controller.excecoes.FalhaAutenticacaoException;
import domine.User;
import util.Criptografia;
import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.servlet.DispatcherType;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author 1978233
 */
@WebFilter(filterName = "AuthFilter", urlPatterns = {"/api/private/*"}, dispatcherTypes = {DispatcherType.REQUEST})
public class AuthFilter implements Filter {
    
    private FilterConfig filterConfig = null;
    
    @PersistenceContext(unitName = "CorgisPU")
    private EntityManager em;
    
    
    public AuthFilter() {
        
    }    
    
    /**
     *
     * @param request The servlet request we are processing
     * @param response The servlet response we are creating
     * @param chain The filter chain we are processing
     *
     * @exception IOException if an input/output error occurs
     * @exception ServletException if a servlet error occurs
     */
    public void doFilter(ServletRequest request, ServletResponse response,
            FilterChain chain)
            throws IOException, ServletException {

        HttpServletResponse resp = (HttpServletResponse) response;
        HttpServletRequest req  = (HttpServletRequest) request;
        
        if (req.getMethod().equalsIgnoreCase("options")){
            chain.doFilter(req, resp);
        } else {
        
        try {
                String[] auth = Criptografia.tokenDecrypt(req.getHeader("Authorization"));
                User usuario = null;
                try{
                    usuario = (User) this.em.createNamedQuery("filtro_login").setParameter("email", auth[0]).setParameter("password", auth[1]).getSingleResult();
                    req.setAttribute("user", usuario);
                    chain.doFilter(req, resp);
                }catch(NoResultException e){
                    throw new FalhaAutenticacaoException();
                }
                if (usuario == null){
                    throw new FalhaAutenticacaoException();
                }
        } catch (FalhaAutenticacaoException ex) {
            resp.setHeader("WWW-Authenticate", "Basic realm=\"autenticacao\"");
            resp.sendError(HttpServletResponse.SC_UNAUTHORIZED, ex.getMessage());
        }
        
        }
        
        
    }
    

    /**
     * Return the filter configuration object for this filter.
     */
    public FilterConfig getFilterConfig() {
        return (this.filterConfig);
    }

    /**
     * Set the filter configuration object for this filter.
     *
     * @param filterConfig The filter configuration object
     */
    public void setFilterConfig(FilterConfig filterConfig) {
        this.filterConfig = filterConfig;
    }

    /**
     * Destroy method for this filter
     */
    public void destroy() {        
    }

    /**
     * Init method for this filter
     */
    public void init(FilterConfig filterConfig) {        
        this.filterConfig = filterConfig;
    }

    
}
