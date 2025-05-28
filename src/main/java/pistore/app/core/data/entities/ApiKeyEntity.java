package pistore.app.core.data.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;



@Entity
@Table(name = "api_keys")
@Getter @Setter @AllArgsConstructor
public class ApiKeyEntity {
    @Id
    private UUID id;
    @Column(name = "user_id", nullable = false)
    private UUID userId;
    @Column(nullable = false)
    private String hashedKey;
    @Column(nullable = false)
    private LocalDateTime createdAt;
    @Column(nullable = false)
    private Boolean isActive;


    public ApiKeyEntity() {}

    public ApiKeyEntity(UUID userId, String hashedKey) {
        this.userId = userId;
        this.hashedKey = hashedKey;
        this.id = UUID.randomUUID();
        this.createdAt = LocalDateTime.now();
        this.isActive = true;
    }
}
