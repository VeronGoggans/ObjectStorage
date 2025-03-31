package pistore.app.core.data.entities;


import jakarta.persistence.*;
import pistore.app.core.domain.enums.StorageTier;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "buckets")
public class Bucket {
    @Id
    private UUID id;
    @Column(nullable = false, updatable = false)
    private final LocalDateTime createdAt = LocalDateTime.now();
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private StorageTier storageTier;
    private Integer objectCount = 0;
    private Double size = 0.0;

    public Bucket() {}

    public Bucket(String name, StorageTier storageTier) {
        this.name = name;
        this.storageTier = storageTier;
        this.id = UUID.randomUUID();
    }

    public UUID getId() {
        return id;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public String getName() {
        return name;
    }

    public StorageTier getStorageTier() {
        return storageTier;
    }

    public Integer getObjectCount() {
        return objectCount;
    }

    public Double getSize() {
        return size;
    }
}
