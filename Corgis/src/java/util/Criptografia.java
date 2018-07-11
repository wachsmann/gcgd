/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package util;


import controller.excecoes.FalhaAutenticacaoException;
import domine.User;
import java.io.IOException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Date;
import java.util.StringTokenizer;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.xml.bind.DatatypeConverter;
;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import io.jsonwebtoken.*;

import java.util.Date;    


/**
 *
 * @author 1978233
 */
public final class Criptografia {
    
    public static String criptografar(String texto){
 
        MessageDigest m;
        String retorno;
        try {
            m = MessageDigest.getInstance("MD5");
            m.update(texto.getBytes(),0,texto.length());
            retorno = new BigInteger(1,m.digest()).toString(16);
        } catch (NoSuchAlgorithmException ex) {
            retorno = texto;
        }
        
       return retorno;  
              
    }
    public static String tokenEncrypt(String email,String pass){
 
    long nowMillis = System.currentTimeMillis();
    Date now = new Date(nowMillis);
 
    //We will sign our JWT with our ApiKey secret
    byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary("u shall not pass");
    Key signingKey = new SecretKeySpec(apiKeySecretBytes, "HS256");
 
    //Let's set the JWT Claims
    JwtBuilder builder = Jwts.builder()
                                .setId(email)
                                .setSubject(pass)
                                //.setIssuedAt(now)
                                //.setSubject(subject)
                                //.setIssuer(issuer)
                                .signWith(SignatureAlgorithm.HS256,signingKey);
 
    //if it has been specified, let's add the expiration

    
 
    //Builds the JWT and serializes it to a compact, URL-safe string
    return builder.compact();
              
    }
    public static String[] tokenDecrypt(String token) throws FalhaAutenticacaoException{
        if (token == null){
            throw new FalhaAutenticacaoException();
        }
        try{
            
            byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary("u shall not pass");
            Key signingKey = new SecretKeySpec(apiKeySecretBytes, "HS256");
            String name = Jwts.parser().setSigningKey(signingKey).parseClaimsJws(token).getBody().getId();
            String pass = Jwts.parser().setSigningKey(signingKey).parseClaimsJws(token).getBody().getSubject();
            
            return new String[] {name,pass};
            
        } catch (JwtException e) {

            //don't trust the JWT!
            throw new FalhaAutenticacaoException();
        }
    }
    public static String[] descriptografarAutenticacao(String authHeader) throws FalhaAutenticacaoException{
        if (authHeader == null){
            throw new FalhaAutenticacaoException();
        }
        
            final String encodedUserPassword = authHeader.replaceFirst("Basic"+ " ", "");
            String usernameAndPassword = null;
            try {
                byte[] decodedBytes = Base64.getDecoder().decode(encodedUserPassword);
                usernameAndPassword = new String(decodedBytes, "UTF-8");
            } catch (IOException e) {
                    throw new FalhaAutenticacaoException();
            }
            final StringTokenizer tokenizer = new StringTokenizer(usernameAndPassword, ":");
            return new String[]{tokenizer.nextToken(),Criptografia.criptografar(tokenizer.nextToken())};
        //}
        //throw new FalhaAutenticacaoException();
    }
    
}
