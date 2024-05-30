package tn.rns.hrj.GestionDeStock.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.rns.hrj.GestionDeStock.models.Fournisseur;

import java.util.List;

@Repository
public interface FournisseurRepository extends JpaRepository<Fournisseur, Integer> {
    //   get client By fav
    public List<Fournisseur> getByFavorisFournisseur(Boolean fav);
}
