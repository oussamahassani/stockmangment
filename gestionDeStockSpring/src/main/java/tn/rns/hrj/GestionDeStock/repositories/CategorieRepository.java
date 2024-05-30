package tn.rns.hrj.GestionDeStock.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.rns.hrj.GestionDeStock.models.Categorie;

@Repository
public interface CategorieRepository extends JpaRepository<Categorie, Integer> {
}
