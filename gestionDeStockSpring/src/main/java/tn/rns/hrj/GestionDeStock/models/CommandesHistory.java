package tn.rns.hrj.GestionDeStock.models;
import lombok.*;

import javax.persistence.*;

import org.springframework.data.annotation.CreatedDate;

import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "CommandesHistory")
@NoArgsConstructor
@RequiredArgsConstructor
public class CommandesHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(value = AccessLevel.NONE)
    private int id;

    @NonNull
    @Column(name = "refCommande")
    private String refCommande;
   
    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate;

   private String message ; 

    @ManyToOne
    private Commande commande;

}
