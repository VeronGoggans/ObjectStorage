package pistore.app.core.data.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import pistore.app.core.domain.enums.StorageTier;
import java.time.LocalDateTime;
import java.util.UUID;



@Entity
@Table(name = "buckets")
@Getter @Setter @AllArgsConstructor
public class BucketEntity {
    @Id
    private UUID id;
    @Column(nullable = false, updatable = false)
    private final LocalDateTime createdAt = LocalDateTime.now();
    @Column(nullable = false)
    private LocalDateTime modifiedAt = LocalDateTime.now();
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private StorageTier storageTier;
    private Integer objectCount = 0;
    private Double size = 0.0;
    @Column(name = "user_id")
    private UUID userId;

    public BucketEntity() {}

    public BucketEntity(String name, StorageTier storageTier, UUID userId) {
        this.name = name;
        this.storageTier = storageTier;
        this.userId = userId;
        this.id = UUID.randomUUID();
    }
}
