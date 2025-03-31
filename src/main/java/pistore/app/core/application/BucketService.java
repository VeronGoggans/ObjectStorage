package pistore.app.core.application;

import org.springframework.stereotype.Service;
import pistore.app.core.data.repositories.BucketRepository;

@Service
public class BucketService {
    private final BucketRepository bucketRepository;


    public BucketService(BucketRepository bucketRepository) {
        this.bucketRepository = bucketRepository;
    }
}
