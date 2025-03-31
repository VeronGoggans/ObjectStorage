package pistore.app.core.application;

import org.springframework.stereotype.Service;
import pistore.app.core.data.repositories.ObjectRepository;

@Service
public class ObjectService {
    private final ObjectRepository objectRepository;


    public ObjectService(ObjectRepository objectRepository) {
        this.objectRepository = objectRepository;
    }
}
