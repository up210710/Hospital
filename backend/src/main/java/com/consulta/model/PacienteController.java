package com.consulta.controller; 
import com.consulta.model.Paciente; 
import com.consulta.repository.PacienteRepository; 
import org.springframework.http.HttpStatus; 
import org.springframework.http.ResponseEntity; 
import org.springframework.web.bind.annotation.*; 
import java.util.Map; 
import java.util.Optional; 
/** 
* Controla el registro y “login” (muy básico) de pacientes. 
* URL base: /auth 
*/ 
@RestController 
@RequestMapping("/auth") 
public class PacienteController { 
private final PacienteRepository repo; 
public PacienteController(PacienteRepository repo) { 
this.repo = repo; 
} 
    /** POST /auth/register  ➜  registra un nuevo paciente */ 
    @PostMapping("/register") 
    public Paciente registrar(@RequestBody Paciente p) { 
        // En un proyecto real validarías correo único y encriptarías password 
        return repo.save(p); 
    } 
 
    /** POST /auth/login ➜  busca por correo y compara password  */ 
    @PostMapping("/login") 
    public ResponseEntity<?> login(@RequestBody Map<String, String> cred) { 
        Optional<Paciente> p = repo.findByCorreo(cred.get("correo")); 
        if (p.isPresent() && p.get().getPassword().equals(cred.get("password"))) { 
            return ResponseEntity.ok(p.get());        // “Éxito” 
        } 
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED) 
                             .body("Credenciales inválidas"); 
    } 
} 
