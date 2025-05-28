package pistore.app.core.application;

import org.springframework.stereotype.Service;
import pistore.app.core.data.repositories.ApiKeyRepository;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;


@Service
public class ApiKeyService {
    private final ApiKeyRepository apiKeyRepository;
    private static final SecureRandom secureRandom = new SecureRandom();

    public ApiKeyService(ApiKeyRepository apiKeyRepository) {
        this.apiKeyRepository = apiKeyRepository;
    }


    public static String generateApiKey() {
        byte[] key = new byte[32];
        secureRandom.nextBytes(key);
        return Base64.getUrlEncoder().withoutPadding().encodeToString(key);
    }


    public static String hashApiKey(String apiKey) throws RuntimeException {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hashedBytes = digest.digest(apiKey.getBytes());
            return Base64.getEncoder().encodeToString(hashedBytes);
        }
        catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Error hashing the api key. ", e);
        }
    }
}
