package pistore.app.core.data.repositories;

import jakarta.annotation.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pistore.app.core.data.entities.Bucket;

@Repository
public interface BucketRepository extends JpaRepository<Bucket, Long> {
}
