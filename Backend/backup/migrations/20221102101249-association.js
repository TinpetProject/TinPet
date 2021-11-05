'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.addConstraint('Album',{
      fields: ['userID'],
      type: 'foreign key',
      name: 'Album_User_FK',
      references:{
        table: 'User',
        field: 'userID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Comment',{
      fields: ['userID'],
      type: 'foreign key',
      name: 'Comment_User_FK',
      references:{
        table: 'User',
        field: 'userID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('CommentReaction',{
      fields: ['userID'],
      type: 'foreign key',
      name: 'CommentReaction_User_FK',
      references:{
        table: 'User',
        field: 'userID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('CommentReaction',{
      fields: ['commentID'],
      type: 'foreign key',
      name: 'CommentReaction_Comment_FK',
      references:{
        table: 'Comment',
        field: 'CommentID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('CommentReaction',{
      fields: ['reactionID'],
      type: 'foreign key',
      name: 'CommentReaction_Reaction_FK',
      references:{
        table: 'Reaction',
        field: 'reactionID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Conversation',{
      fields: ['userOneID'],
      type: 'foreign key',
      name: 'Conversation_User_FK',
      references:{
        table: 'User',
        field: 'userID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Conversation',{
      fields: ['userTwoID'],
      type: 'foreign key',
      name: 'Conversation_User1_FK',
      references:{
        table: 'User',
        field: 'userID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Message',{
      fields: ['userID'],
      type: 'foreign key',
      name: 'Message_User_FK',
      references:{
        table: 'User',
        field: 'userID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Message',{
      fields: ['reactionID'],
      type: 'foreign key',
      name: 'Message_Reaction_FK',
      references:{
        table: 'Reaction',
        field: 'reactionID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Message',{
      fields: ['conversationID'],
      type: 'foreign key',
      name: 'Message_Conversation_FK',
      references:{
        table: 'Conversation',
        field: 'conversationID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Pet',{
      fields: ['userID'],
      type: 'foreign key',
      name: 'Pet_User_FK',
      references:{
        table: 'User',
        field: 'userID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Pet',{
      fields: ['petTypeID'],
      type: 'foreign key',
      name: 'Pet_PetType_FK',
      references:{
        table: 'PetType',
        field: 'petTypeID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('PetColor',{
      fields: ['petID'],
      type: 'foreign key',
      name: 'PetColor_Pet_FK',
      references:{
        table: 'Pet',
        field: 'petID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('PetColor',{
      fields: ['colorID'],
      type: 'foreign key',
      name: 'PetColor_Color_FK',
      references:{
        table: 'Color',
        field: 'colorID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('PetProperty',{
      fields: ['petID'],
      type: 'foreign key',
      name: 'PetProperty_Pet_FK',
      references:{
        table: 'Pet',
        field: 'petID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('PetProperty',{
      fields: ['propertyID'],
      type: 'foreign key',
      name: 'PetProperty_Property_FK',
      references:{
        table: 'Property',
        field: 'propertyID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('PetSpecies',{
      fields: ['petID'],
      type: 'foreign key',
      name: 'PetSpecies_Pet_FK',
      references:{
        table: 'Pet',
        field: 'petID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('PetSpecies',{
      fields: ['speciesID'],
      type: 'foreign key',
      name: 'PetSpecies_Species_FK',
      references:{
        table: 'Species',
        field: 'speciesID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Photo',{
      fields: ['albumID'],
      type: 'foreign key',
      name: 'Photo_Album_FK',
      references:{
        table: 'Album',
        field: 'albumID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Photo',{
      fields: ['postID'],
      type: 'foreign key',
      name: 'Photo_Post_FK',
      references:{
        table: 'Post',
        field: 'postID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Post',{
      fields: ['userID'],
      type: 'foreign key',
      name: 'Post_User_FK',
      references:{
        table: 'User',
        field: 'userID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('PostReaction',{
      fields: ['userID'],
      type: 'foreign key',
      name: 'PostReaction_User_FK',
      references:{
        table: 'User',
        field: 'userID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('PostReaction',{
      fields: ['postID'],
      type: 'foreign key',
      name: 'PostReaction_Post_FK',
      references:{
        table: 'Post',
        field: 'postID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('PostReaction',{
      fields: ['reactionID'],
      type: 'foreign key',
      name: 'PostReaction_Reaction_FK',
      references:{
        table: 'Reaction',
        field: 'reactionID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Relationship',{
      fields: ['userID'],
      type: 'foreign key',
      name: 'Relationship_User_FK',
      references:{
        table: 'User',
        field: 'userID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Relationship',{
      fields: ['targetUserID'],
      type: 'foreign key',
      name: 'Relationship_User1_FK',
      references:{
        table: 'User',
        field: 'userID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('ResetToken',{
      fields: ['userID'],
      type: 'foreign key',
      name: 'ResetToken_User_FK',
      references:{
        table: 'User',
        field: 'userID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Setting',{
      fields: ['userID'],
      type: 'foreign key',
      name: 'Setting_User_FK',
      references:{
        table: 'User',
        field: 'userID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Setting',{
      fields: ['languageID'],
      type: 'foreign key',
      name: 'Setting_Language_FK',
      references:{
        table: 'Language',
        field: 'languageID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Setting',{
      fields: ['timezoneID'],
      type: 'foreign key',
      name: 'Setting_Timezone_FK',
      references:{
        table: 'Timezone',
        field: 'timezoneID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Setting',{
      fields: ['themeID'],
      type: 'foreign key',
      name: 'Setting_Theme_FK',
      references:{
        table: 'Theme',
        field: 'themeID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Tag',{
      fields: ['userID'],
      type: 'foreign key',
      name: 'Tag_User_FK',
      references:{
        table: 'User',
        field: 'userID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Tag',{
      fields: ['postID'],
      type: 'foreign key',
      name: 'Tag_Post_FK',
      references:{
        table: 'Post',
        field: 'postID',
      },
      onDelete: 'cascade',
    })
    await queryInterface.addConstraint('Video',{
      fields: ['postID'],
      type: 'foreign key',
      name: 'Video_Post_FK',
      references:{
        table: 'Post',
        field: 'postID',
      },
      onDelete: 'cascade',
    })
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
      queryInterface.removeConstraint('Albums',{
        fields: ['userID'],
        type: 'foreign key',
        name: 'Album_User_FK',
        references:{
          table: 'Users',
          field: 'userID',
        }
      })
  }
};
