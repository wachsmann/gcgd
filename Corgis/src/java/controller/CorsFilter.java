/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.io.StringWriter;
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
@WebFilter(filterName = "CorsFilter", urlPatterns = {"/api/*"}, dispatcherTypes = {DispatcherType.REQUEST})
public class CorsFilter implements Filter {
    
    private FilterConfig filterConfig = null;
    
    public CorsFilter() {
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

        HttpServletRequest  req  = (HttpServletRequest) request;
        
        HttpServletResponse resp = (HttpServletResponse) response;
        
        resp.addHeader("Access-Control-Allow-Origin", req.getHeader("Origin"));
        resp.addHeader("crossDomain", "true");
         
        resp.addHeader("Access-Control-Allow-Credentials", "true");
        resp.addHeader("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        //resp.addHeader("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        resp.addHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS, HEAD");        
        
        chain.doFilter(request, resp);
        
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
