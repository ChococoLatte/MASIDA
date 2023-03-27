package com.ssafy.cocktail.backend.domain.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor(access= AccessLevel.PUBLIC)
@Table(name="comments")
public class Comment {
    @Id
    @GeneratedValue
    @Column(name = "comment_id")
    private Long id;

    String commentContent;
    Double commentRating;
    Double commentDifficulty;
    String commentDeleted;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime commentCreatedDate;
    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime commentUpdateDate;

    @Builder
    public Comment(Long id, String commentContent, double commentRating, double commentDifficulty, String commentDeleted, LocalDateTime commentCreatedDate, LocalDateTime commentUpdateDate) {
        this.id = id;
        this.commentContent = commentContent;
        this.commentRating = commentRating;
        this.commentDifficulty = commentDifficulty;
        this.commentDeleted = commentDeleted;
        this.commentCreatedDate = commentCreatedDate;
        this.commentUpdateDate = commentUpdateDate;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="cocktail_id")
    Cocktail cocktail;

}
