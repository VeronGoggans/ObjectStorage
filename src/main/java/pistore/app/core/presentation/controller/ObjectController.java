package pistore.app.core.presentation.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pistore.app.core.application.services.ObjectService;

import java.util.UUID;


@Controller
@RequestMapping("/object-storage/api/v1/objects")
public class ObjectController {

    private final ObjectService objectService;

    public ObjectController(ObjectService objectService) {
        this.objectService = objectService;
    }


    @PostMapping("/{bucketId}")
    public void addObject(@PathVariable UUID bucketId) {

    }


    @GetMapping("/{bucketId}")
    public void getObjects(@PathVariable UUID bucketId) {

    }


    @PutMapping("/{objectId}")
    public void updateObject(@PathVariable UUID objectId) {

    }


    @DeleteMapping("/{objectId}")
    public void deleteObject(@PathVariable UUID objectId) {

    }
}
