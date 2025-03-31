package pistore.app.core.domain;

import org.springframework.http.MediaType;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.UUID;



public class StorageObject {
    private final MultipartFile file;
    private final UUID id;
    private MediaType mimeType;
    private String fileName;
    private final Date creationDate = new Date();

    public StorageObject(MultipartFile file, UUID uuid) {
        this.file = file;
        this.id = uuid;
        this.fileName = file.getOriginalFilename();
        this.fileName = file.getContentType();
    }


    public MultipartFile getFile() {
        return file;
    }

    public byte[] getBytes() throws IOException {
        return file.getBytes();
    }

    public UUID getId() {
        return id;
    }

    public MediaType getMimeType() {
        return mimeType;
    }

    public String getFileName() {
        return fileName;
    }

    public Date getCreationDate() {
        return creationDate;
    }
}
