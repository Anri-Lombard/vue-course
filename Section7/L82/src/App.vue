<template>
  <section>
    <header><h1>My Friends</h1></header>
    <new-friend @add-friend="addFriendToList"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :company="friend.company"
        :favourite-book="friend.favouriteBook"
        :isFavourite="friend.isFavourite"
        @toggle-favourite="toggleFavouriteStatus"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";
export default {
  components: { FriendContact, NewFriend },
  data() {
    return {
      friends: [
        {
          id: "Elon",
          name: "Elon Musk",
          company: "SpaceX",
          favouriteBook: "Superintellegance",
          isFavourite: false,
        },
        {
          id: "Jeff",
          name: "Jeff Bezos",
          company: "Amazon",
          favouriteBook: "The Remains Of Our Days",
          isFavourite: false,
        },
        {
          id: "Bill",
          name: "Bill Gates",
          company: "Bill and Melinda Gates Foundation",
          isFavourite: true,
        },
        {
          id: "Phil",
          name: "Phil Knight",
          company: "Nike",
          favouriteBook: "Shoe Dog",
          isFavourite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavouriteStatus(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavourite = !identifiedFriend.isFavourite;
    },
    addFriendToList(anotherFriend) {
      // this.friends.push(anotherFriend);
      if (anotherFriend["company"] === "") {
        anotherFriend["company"] = "No Company Yet";
      }
      if (anotherFriend["favouriteBook"] === "") {
        anotherFriend["favouriteBook"] = "No Book Specified";
      }
      console.log(anotherFriend);
      this.friends.push(anotherFriend);
    },
  },
};
</script>
