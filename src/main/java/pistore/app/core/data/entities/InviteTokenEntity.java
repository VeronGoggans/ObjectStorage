package pistore.app.core.data.entities;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;


@Entity
@Table(name = "invite_tokens")
@Getter @Setter @AllArgsConstructor
public class InviteTokenEntity {
    @Id
    private UUID id;
    @Column(nullable = false, unique = true)
    private String token;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private Boolean used = false;
    @Column(nullable = false)
    private LocalDateTime createdAt;
    private LocalDateTime usedAt;
    private LocalDateTime expiresAt;


    public InviteTokenEntity() {}

    public InviteTokenEntity(String token, String email) {
        this.token = token;
        this.email = email;
        this.id = UUID.randomUUID();
        this.createdAt = LocalDateTime.now();
        this.expiresAt = LocalDateTime.now().plusDays(1); // Expires in one day from creation.
    }
}
