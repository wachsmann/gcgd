/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package domine;

import java.io.Serializable;
import java.util.Calendar;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author 6197558
 */
@Entity
@XmlRootElement
public class Parcel implements Serializable {

    @OneToMany(mappedBy = "parcel")
    private List<Payment> payments;

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    
    @ManyToOne
    private Expense expense;
    
    @ManyToOne
    public User user;


    @Temporal(javax.persistence.TemporalType.DATE)
    private Calendar validity;
    @Column(name = "parcel_value")
    private float value;
    private int status;
    /*@OneToMany
    private List<Payment> payments;
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }*/

    public Calendar getValidity() {
        return validity;
    }

    public void setValidity(Calendar validity) {
        this.validity = validity;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
       

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Parcel)) {
            return false;
        }
        Parcel other = (Parcel) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "domine.Parcel[ id=" + id + " ]";
    }
    
}
