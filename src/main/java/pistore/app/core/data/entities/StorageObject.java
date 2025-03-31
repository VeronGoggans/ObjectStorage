package pistore.app.core.data.entities;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "objects")
public class StorageObject {
    @Id
    private UUID id;
    @ManyToOne
    @JoinColumn(name = "buckets", referencedColumnName = "id", nullable = false)
    private Bucket bucket;
    @Column(nullable = false)
    private String filename;
    @Column(nullable = false)
    private String filepath;
    private Double size;

    public StorageObject() {}

    public StorageObject(Bucket bucket, String filename, String filepath, Double size) {
        this.bucket = bucket;
        this.filename = filename;
        this.filepath = filepath;
        this.size = size;
        this.id = UUID.randomUUID();
    }

    public UUID getId() {
        return id;
    }

    public Bucket getBucket() {
        return bucket;
    }

    public String getFilename() {
        return filename;
    }

    public String getFilepath() {
        return filepath;
    }

    public Double getSize() {
        return size;
    }
}
