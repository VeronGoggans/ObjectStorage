package pistore.app.core.domain;


import java.time.LocalDateTime;
import java.util.UUID;

public class User {
    private UUID id;
    private String username;
    private String password;
    private String email;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private String pathToProfilePicture;
}
