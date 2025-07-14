<script>
    import profilePic from "../../assets/profile_pic.jpg";
    let { title, subtitle = null } = $props();
</script>

<div class="top-container">
    <div class="contact-container">
        <img class="profile-pic" src={profilePic} alt="profile_picture" />
        <div class="content">
            <h4>{title}</h4>
            {#if subtitle != null}
                <p>{subtitle}</p>
            {/if}
        </div>
    </div>
    <div class="drawer">
        <button>Send friend request</button>
        <button>Block</button>
    </div>
</div>

<style>
    .drawer {
        display: flex;
        flex-direction: column;
        height: 6em;
        box-sizing: border-box;
    }
    .drawer button {
        background-color: #323333;
        color: #fff;
        border: none;
        border-radius: 0em;
        padding: 0em;
        margin: 0em;
        height: 2.5em;
        box-sizing: border-box;
    }
    .top-container {
        display: flex;
        flex-direction: column;
        height: 4.6em;
        margin: 0.8em 0.8em 0 0.8em;
        border-radius: 0.8em;
        transition:
            background-color 0.1s,
            height 0.1s;
        overflow: hidden;
        box-sizing: border-box;
    }
    .top-container:hover {
        height: 10.6em;
    }
    .contact-container {
        display: flex;
        align-items: center;
        justify-content: start;
        height: 3em;
        margin: 0.8em;
        box-sizing: border-box;
    }
    .content {
        display: flex;
        flex-direction: column;
        margin-left: 1em;
        text-align: start;
    }
    .top-container:hover {
        background-color: #323333;
    }
    .contact-container h4 {
        font-size: 1em;
        font-weight: 500;
        margin: 0;
        color: #fff;
    }
    .contact-container p {
        font-size: 0.8em;
        margin: 0;
        font-weight: 400;
        color: #fff;
        align-self: self-start;
    }
    .profile-pic {
        width: 3em;
        height: 3em;
        border-radius: 50%;
        object-fit: cover;
    }
</style>
