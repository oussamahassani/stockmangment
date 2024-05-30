package tn.rns.hrj.GestionDeStock.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.rns.hrj.GestionDeStock.models.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    // return True if email already exist
    boolean existsByEmail(String email);
    // find user by email address
    User findByEmail(String email);
}
