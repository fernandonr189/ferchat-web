<script>
    import profilePic from "../../assets/profile_pic.jpg";
    let { title, subtitle = null } = $props();
</script>

<div class="contact-container">
    <img class="profile-pic" src={profilePic} alt="profile_picture" />
    <div class="content">
        <h4>{title}</h4>
        {#if subtitle != null}
            <p>{subtitle}</p>
        {/if}
    </div>
</div>

<style>
    .contact-container {
        display: flex;
        align-items: center;
        justify-content: start;
        height: 3em;
        margin: 0.8em 0.8em 0 0.8em;
        padding: 0.8em;
        border-radius: 0.8em;
        transition: background-color 0.1s;
    }
    .content {
        display: flex;
        flex-direction: column;
        margin-left: 1em;
        text-align: start;
    }
    .contact-container:hover {
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
