/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package validation;

import domine.User;
import static javax.ws.rs.client.Entity.entity;

/**
 *
 * @author Daniel
 */
public class userValidator {

    public userValidator() {
    }
    
   
    public String validate(User entity) {
        if (entity.getName() == null || entity.getName().isEmpty()) 
            return "Nome esta vazio";        
        else if (entity.getName().length() > 70)
            return "Nome ultrapassou o limite de caracteres";
        
        else if (entity.getPhone() == null || entity.getPhone().isEmpty())
            return "Telefone esta vazio";
        else if (entity.getPhone().length() < 9 || entity.getPhone().length() > 11)
            return "tamanho do telefone inválido";
        
        else if (entity.getEmail() == null || entity.getEmail().isEmpty())
            return "Email esta vazio";
        else if (entity.getEmail().length() > 70)
            return "email ultrapassou o limite de caracteres";
        
        else if (entity.getPassword() == null || entity.getPassword().isEmpty())
            return "Campo da senha esta vazio";
        else if (entity.getPassword().length() < 8)
            return "Senha deve conter no minimo 8 caracteres";
        else if (entity.getPassword().length() > 30)
            return "Senha nao pode exceder os 30 caracteres";
        
        return "ok";
    }
}
