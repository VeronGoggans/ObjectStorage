package pistore.app.lib.FileUtils;

import pistore.app.core.domain.StorageObject;
import pistore.app.lib.FileUtils.exceptions.FileNotFoundException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;



public class FileHelper {
    private String STORAGE_PATH = "storage/objects/";


    public byte[] readFile(UUID uuid) throws IOException
    {
        Path filePath = Paths.get(this.STORAGE_PATH + uuid);
        return Files.readAllBytes(filePath);
    }


    public void deleteFile(UUID uuid) throws IOException, FileNotFoundException
    {
        Path filePath = Paths.get(this.STORAGE_PATH + uuid);

        boolean deleted = Files.deleteIfExists(filePath);
        if (!deleted) {
            throw new FileNotFoundException("Could not find the file with ID: %s" + uuid);
        }
    }


    public Path saveFile(StorageObject storageObject) throws IOException
    {
        Path filePath = this.getUniqueFilePath(storageObject.getId());
        return Files.write(filePath, storageObject.getBytes());
    }


    private Path getUniqueFilePath(UUID fileId)
    {
        Path filePath = Paths.get(this.STORAGE_PATH + fileId);
        if (Files.notExists(filePath)) {
            return filePath;
        }
        do {
            String newFileId = UUID.randomUUID().toString();
            filePath = Paths.get(this.STORAGE_PATH + newFileId);
        } while (Files.exists(filePath));  // Keep generating UUIDs until it's unique
        return filePath;
    }
}
