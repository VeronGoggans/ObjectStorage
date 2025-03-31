package pistore.app.core.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pistore.app.core.data.entities.StorageObject;

@Repository
public interface ObjectRepository extends JpaRepository<StorageObject, Long> {
}
