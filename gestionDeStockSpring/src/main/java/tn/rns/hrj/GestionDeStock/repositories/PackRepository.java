package tn.rns.hrj.GestionDeStock.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.rns.hrj.GestionDeStock.models.Pack;

@Repository
public interface PackRepository extends JpaRepository<Pack, Integer> {
}
