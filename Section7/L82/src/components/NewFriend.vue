<template>
  <form @submit.prevent="addNewFriend">
    <h3>Add A new friend</h3>
    <div>
      <label for="friendName">Name: </label>
      <input required v-model="friendName" type="text" name="friendName" />
    </div>
    <div>
      <label for="friendCompany">Company: </label>
      <input v-model="friendCompany" type="text" name="friendCompany" />
    </div>
    <div>
      <label for="friendFavouriteBook">Favourite Book: </label>
      <input
        v-model="friendFavouriteBook"
        type="text"
        name="friendFavouriteBook"
      />
    </div>
    <div>
      <button>Add Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  //   props: {
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //     friendCompany: {
  //       type: String,
  //       required: false,
  //       default: "No friendCompany yet",
  //     },
  //     friendFavouriteBook: {
  //       type: String,
  //       required: false,
  //       default: "No favourite book specified",
  //     },
  //   },
  emits: ["add-friend"],
  data() {
    return {
      friendName: "",
      friendCompany: "",
      friendFavouriteBook: "",
    };
  },
  methods: {
    addNewFriend() {
      const anotherFriend = {
        id: this.friendName,
        name: this.friendName,
        company: this.friendCompany,
        favouriteBook: this.friendFavouriteBook,
        isFavourite: false,
      };
      this.$emit("add-friend", anotherFriend);
      this.friendName = "";
      this.friendCompany = "";
      this.friendFavouriteBook = "";
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

input {
  text-align: left;
  margin-bottom: 0.2rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 8rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
