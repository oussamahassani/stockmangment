package tn.rns.hrj.GestionDeStock.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.rns.hrj.GestionDeStock.models.Produit;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {
}
