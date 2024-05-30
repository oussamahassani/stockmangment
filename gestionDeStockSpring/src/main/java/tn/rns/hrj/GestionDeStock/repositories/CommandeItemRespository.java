package tn.rns.hrj.GestionDeStock.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.rns.hrj.GestionDeStock.models.CommandeItem;

import java.util.Optional;

@Repository
public interface CommandeItemRespository extends JpaRepository<CommandeItem, Long> {
    // find item by id
    Optional<CommandeItem> findById(Long id);
}
