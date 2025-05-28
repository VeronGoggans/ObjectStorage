package pistore.app.core.application;

import org.springframework.stereotype.Service;
import pistore.app.core.application.exceptions.UserNotFoundException;
import pistore.app.core.data.repositories.UserRepository;

import java.util.UUID;


@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public void checkIfUserExists(UUID userId) throws UserNotFoundException {
        userRepository.findById(userId).orElseThrow(()
                -> new UserNotFoundException("This user does not exist."));
    }
}
