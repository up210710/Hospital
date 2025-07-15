package com.consulta.controller; 
import com.consulta.model.Cita; 
import com.consulta.model.Medico; 
import com.consulta.model.Paciente; 
import com.consulta.repository.CitaRepository; 
import com.consulta.repository.MedicoRepository; 
import com.consulta.repository.PacienteRepository; 
import org.springframework.web.bind.annotation.*; 
import java.time.LocalDate; 
import java.util.List; 
import java.util.Map; 
/** 
* Controla la creación y consulta de citas. 
* URL base: /citas 
*/ 
@RestController 
@RequestMapping("/citas") 
public class CitaController { 
private final CitaRepository citaRepo; 
private final MedicoRepository medicoRepo; 
private final PacienteRepository pacienteRepo; 
public CitaController(CitaRepository citaRepo, 
MedicoRepository medicoRepo, 
PacienteRepository pacienteRepo) { 
        this.citaRepo = citaRepo; 
        this.medicoRepo = medicoRepo; 
        this.pacienteRepo = pacienteRepo; 
    } 
 
    /** POST /citas  ➜  Crea una nueva cita */ 
    @PostMapping 
    public Cita agendar(@RequestBody Map<String, String> datos) { 
        // 1. Obtener entidades relacionadas 
        Paciente paciente = pacienteRepo.findById( 
                Long.parseLong(datos.get("pacienteId")) 
        ).orElseThrow(() -> new IllegalArgumentException("Paciente no encontrado")); 
 
        Medico medico = medicoRepo.findById( 
                Long.parseLong(datos.get("medicoId")) 
        ).orElseThrow(() -> new IllegalArgumentException("Médico no encontrado")); 
 
        // 2. Crear la cita 
        Cita c = new Cita(); 
        c.setFecha(LocalDate.parse(datos.get("fecha")));   // Formato: 2025‑07‑30 
        c.setPaciente(paciente); 
        c.setMedico(medico); 
 
        // 3. Guardar y devolver 
        return citaRepo.save(c); 
    } 
 
    /** GET /citas/paciente/{id}  ➜  Lista citas de un paciente */ 
    @GetMapping("/paciente/{id}") 
public List<Cita> porPaciente(@PathVariable Long id) { 
return citaRepo.findByPacienteId(id); 
} 
/** GET /citas  ➜  Lista todas las citas (útil para pruebas) */ 
@GetMapping 
public List<Cita> todas() { 
return citaRepo.findAll(); 
} 
}