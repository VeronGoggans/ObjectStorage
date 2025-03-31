package pistore.app.lib;

import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;
import pistore.app.core.domain.StorageObject;
import pistore.app.lib.FileUtils.FileHelper;
import pistore.app.lib.FileUtils.exceptions.FileNotFoundException;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

public class FileHelperTest {
    private final FileHelper fileHelper = new FileHelper();
    private final Path testImagePath = Path.of("src/test/resources/test-image.jpg");
    private final Path testTextFilePath = Path.of("storage/objects/408a8481-f57c-47e0-b80b-5ef37e72d840.txt");
    private final Path testPDFFilePath = Path.of("");
    private final Path testDatabaseFilePath = Path.of("");
    private final UUID txtFileId = UUID.fromString("1c3235a6-de65-43b2-8bd4-06b3afb6678b");
    private final Path textFilePath = Path.of("storage\\objects\\1c3235a6-de65-43b2-8bd4-06b3afb6678b");



    @Test
    public void testSaveFile() throws IOException
    {
        // Saving a text file
        StorageObject textStorageObject = this.getTestTextFile();
        assertEquals(this.textFilePath, fileHelper.saveFile(textStorageObject));





        // Checking if a UUID collision is prevented
        fileHelper.saveFile(textStorageObject);
    }


    @Test
    public void testReadFile() throws IOException
    {
        // Reading a text file
        byte[] bytes = fileHelper.readFile(this.txtFileId);
        assertEquals("Hello world \uD83C\uDF0E", new String(bytes, StandardCharsets.UTF_8));
    }


    @Test
    public void testDeleteFile() throws IOException, FileNotFoundException
    {
        // Delete the file that exists uuid 1c3235a6-de65-43b2-8bd4-06b3afb6678b
        fileHelper.deleteFile(this.txtFileId);

        // Try to delete it again to trigger the FileNotFoundException
        assertThrows(FileNotFoundException.class, () -> {
            fileHelper.deleteFile(this.txtFileId);
        });
    }


    private StorageObject getTestTextFile()
    {
        MultipartFile file = new MockMultipartFile(
                "file",
                "testTextFile.txt",
                MediaType.TEXT_PLAIN_VALUE,
                "Hello world \uD83C\uDF0E".getBytes()
        );

        return new StorageObject(file, this.txtFileId);
    }
}
