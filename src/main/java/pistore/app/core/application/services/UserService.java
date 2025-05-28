package pistore.app.core.application.services;

import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.stereotype.Service;
import pistore.app.config.security.JwtComponent;
import pistore.app.core.application.exceptions.InvalidCredentialsException;
import pistore.app.core.application.exceptions.UserNotFoundException;
import pistore.app.core.data.entities.UserEntity;
import pistore.app.core.data.repositories.UserRepository;

import java.util.Optional;
import java.util.UUID;


@Service
public class UserService {

    private final UserRepository userRepository;
    private final JwtComponent jwtComponent;
    private final Argon2PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, JwtComponent jwtComponent) {
        this.userRepository = userRepository;
        this.jwtComponent = jwtComponent;
        this.passwordEncoder = new Argon2PasswordEncoder(16, 32, 3, 65536, 5);
    }


    public void checkIfUserExists(UUID userId) throws UserNotFoundException {
        userRepository.findById(userId).orElseThrow(()
                -> new UserNotFoundException("This user does not exist."));
    }


    public String register(String username, String email, String password) {
        if (userRepository.findByUsername(username).isPresent()) {
            throw new RuntimeException("User already exists!");
        }

        userRepository.save(
                new UserEntity(
                username,
                email,
                passwordEncoder.encode(password)
            )
        );

        return "User registered successfully!";
    }


    public String login(String username, String password) throws InvalidCredentialsException {
        Optional<UserEntity> user = userRepository.findByUsername(username);
        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword())) {
            return jwtComponent.generateToken(username);
        }
        throw new InvalidCredentialsException("Invalid credentials");
    }
}
