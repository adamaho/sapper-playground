<svelte:options tag="ti-button"/>

<button>
    <slot>
    </slot>
</button>

<script>
    function handleClick(e) {
        dispatch('onclick', e);
    }
</script>

<style>
    button {
        background: white;
        color: black;

        cursor: pointer;

        outline: none;
        user-select: none;

        border: none;
        border-radius: 6px;

        padding: 8px 24px;

        font-weight: bold;
        font-family: 'Rubik', sans-serif;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;

        transition: opacity 0.15s ease-in-out;
    }

    button:hover {
        opacity: 0.7;
    }

    button::-moz-focus-inner {
        border: 0;
    }

</style>