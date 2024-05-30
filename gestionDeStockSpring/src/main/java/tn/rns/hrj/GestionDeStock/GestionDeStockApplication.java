package tn.rns.hrj.GestionDeStock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import tn.rns.hrj.GestionDeStock.models.ERole;
import tn.rns.hrj.GestionDeStock.models.Role;
import tn.rns.hrj.GestionDeStock.models.User;
import tn.rns.hrj.GestionDeStock.repositories.RoleRepository;
import tn.rns.hrj.GestionDeStock.repositories.UserRepository;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
@EnableSwagger2
public class GestionDeStockApplication implements ApplicationRunner {
	@Autowired
	private ApplicationContext applicationContext;
	@Autowired
	UserRepository userRepository;
	@Autowired
	RoleRepository roleRepository;


	public static void main(String[] args) {
		SpringApplication.run(GestionDeStockApplication.class, args);
	}

	// this bean used to crypt the password
	public BCryptPasswordEncoder passwordEncoder() {
		BCryptPasswordEncoder passwordEncoderBean = applicationContext.getBean(BCryptPasswordEncoder.class);
		return passwordEncoderBean;
	}

	@Override
	public void run(ApplicationArguments args) throws Exception {

/*
		// Save roles
		Role superAdminRole = this.roleRepository.save(new Role(ERole.SUPER_ADMIN));
		Role adminRole = this.roleRepository.save(new Role(ERole.ADMIN));
		Role userRole = this.roleRepository.save(new Role(ERole.USER));
		Role guestRole = this.roleRepository.save(new Role(ERole.GUEST));

*/

	






	}

}
