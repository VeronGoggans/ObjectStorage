package pistore.app.core.application.services;

import org.springframework.stereotype.Service;
import pistore.app.core.application.exceptions.ResourceNotFoundException;
import pistore.app.core.application.exceptions.UserNotFoundException;
import pistore.app.core.data.entities.BucketEntity;
import pistore.app.core.data.repositories.BucketRepository;
import pistore.app.core.domain.enums.StorageTier;
import pistore.app.core.presentation.dtos.BucketDTO;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;


@Service
public class BucketService {
    private final BucketRepository bucketRepository;
    private final UserService userService;


    public BucketService(BucketRepository bucketRepository, UserService userService) {
        this.bucketRepository = bucketRepository;
        this.userService = userService;
    }


    public BucketDTO addBucket(String name, StorageTier storageTier, UUID userId) throws UserNotFoundException {
        userService.checkIfUserExists(userId);

        BucketEntity bucket = bucketRepository.save(new BucketEntity(name, storageTier, userId));
        return BucketDTO.build(bucket);
    }


    public List<BucketDTO> getBucketsByUser(UUID userId) throws UserNotFoundException {
        userService.checkIfUserExists(userId);

        return bucketRepository.findBucketsByUserId(userId)
                .stream()
                .map(BucketDTO::build)
                .collect(Collectors.toList());
    }


    public BucketDTO updateBucket(UUID bucketId, UUID userId) throws UserNotFoundException, ResourceNotFoundException {
        userService.checkIfUserExists(userId);

        Optional<BucketEntity> optionalBucket = bucketRepository.findById(bucketId);
        if (optionalBucket.isPresent()) {
            BucketEntity bucket = optionalBucket.get();
            // Update and return the bucket
            return BucketDTO.build(bucketRepository.save(bucket));
        }
        throw new ResourceNotFoundException("Bucket not found");
    }



    public void deleteBucket(UUID bucketId, UUID userId) throws UserNotFoundException {
        userService.checkIfUserExists(userId);
        bucketRepository.deleteById(bucketId);
    }



}
