<template>
    <div>
        <h3 class="text-primary">Locate Blood Sample</h3>
        <hr>
        <ol class="breadcrumb">
            <li class="breadcrumb-item active">Locate Blood Sample</li>
            <li class="breadcrumb-item"><router-link to="#">Edit Blood Sample Location</router-link></li>
        </ol>

        <div class="content mt-5">
            <div class="row">
                <div class="col-8">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                Search:
                            </span>
                        </div>
                        <input type="text" aria-label="Reference #" class="form-control" placeholder="Scan / Enter the Confimatory Reference # or Donation ID"
                            v-model="refnum" required>
                    </div> <!-- end input-group -->
                </div> <!-- end col-8 -->    

            </div> <!-- end row -->
        </div> <!-- end content-->
    </div>
</template>

<script>
export default {
   
}
</script>

<style>

</style>
