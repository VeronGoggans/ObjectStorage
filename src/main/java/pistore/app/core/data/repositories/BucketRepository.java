package pistore.app.core.data.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pistore.app.core.data.entities.BucketEntity;
import java.util.List;
import java.util.UUID;


@Repository
public interface BucketRepository extends JpaRepository<BucketEntity, UUID> {
    List<BucketEntity> findBucketsByUserId(UUID userId);
}
