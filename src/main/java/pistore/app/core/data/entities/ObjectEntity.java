package pistore.app.core.data.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;



@Entity
@Table(name = "objects")
@Getter @Setter @AllArgsConstructor
public class ObjectEntity {
    @Id
    private UUID id;
    @Column(nullable = false)
    private String filename;
    @Column(nullable = false)
    private String filepath;
    private Double size;
    @Column(name = "bucket_id")
    private UUID bucketId;

    public ObjectEntity() {}

    public ObjectEntity(String filename, String filepath, Double size) {
        this.filename = filename;
        this.filepath = filepath;
        this.size = size;
        this.id = UUID.randomUUID();
    }
}
