<script>
    let email = ''
    let address = ''
</script>
<div>
    <div>
        <label for="email">Email</label>
        <input type="text" name="email" bind:value={email} autocomplete="off">
    </div>
    <div>
        <label for="address">Address</label>
        <input type="text" name="address" bind:value={address} autocomplete="off">
    </div>
    <p>Email: {email}</p>
    <p>Address: {address}</p>
</div>