package pistore.app.core.presentation.dtos;
import pistore.app.core.data.entities.BucketEntity;
import pistore.app.core.domain.enums.StorageTier;
import java.time.LocalDateTime;
import java.util.UUID;



public record BucketDTO(
        UUID id,
        LocalDateTime createdAt,
        String name,
        StorageTier storageTier,
        Integer objectCount,
        Double size,
        UUID userId

) {
    public static BucketDTO build(BucketEntity bucket) {
        return new BucketDTO(
                bucket.getId(),
                bucket.getCreatedAt(),
                bucket.getName(),
                bucket.getStorageTier(),
                bucket.getObjectCount(),
                bucket.getSize(),
                bucket.getUserId()
        );
    }
}
