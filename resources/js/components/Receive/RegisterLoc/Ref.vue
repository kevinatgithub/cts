<template>
    <div>
        <div class="card text-white border-info bg-info">
            <div class="card-header">
                <div class="form-group">
                    <div class="row mt-3">
                        <label class="col-sm-4" for="inputDefault"><h5>Ref #:</h5></label>
                        <input type="text" class="form-control col-sm-8" placeholder="Scan/ Enter the Ref #" id="inputDefault" v-bind="refNum" v-model="refnum">
                    </div>
                </div>
            </div> <!-- end card-header -->

            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row mb-1">
                        <div class="col-1 ml-2"><button type="button" class="btn btn-lg btn-outline-info">1</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">2</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">3</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">4</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">5</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">6</button></div> 
                    </div>
                    <div class="row mb-1">
                        <div class="col-1 ml-2"><button type="button" class="btn btn-lg btn-outline-info">1</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">2</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">3</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">4</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">5</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">6</button></div> 
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row mb-1">
                        <div class="col-1 ml-2"><button type="button" class="btn btn-lg btn-outline-info">1</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">2</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">3</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">4</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">5</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">6</button></div> 
                    </div>
                    <div class="row mb-1">
                        <div class="col-1 ml-2"><button type="button" class="btn btn-lg btn-outline-info">1</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">2</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">3</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">4</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">5</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">6</button></div> 
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row mb-1">
                        <div class="col-1 ml-2"><button type="button" class="btn btn-lg btn-outline-info">1</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">2</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">3</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">4</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">5</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">6</button></div> 
                    </div>
                    <div class="row mb-1">
                        <div class="col-1 ml-2"><button type="button" class="btn btn-lg btn-outline-info">1</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">2</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">3</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">4</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">5</button></div>
                        <div class="col-1 ml-5"><button type="button" class="btn btn-lg btn-outline-info">6</button></div> 
                    </div>
                </li>
                
            </ul> <!-- list group -->
            <div class="card-body bg-light text-center">
                <a href="#" class="card-link">prev</a>
                <a href="#" class="card-link">next</a>
            </div> <!-- card-body -->
            <div class="card-footer text-center">
                {{refnum}}
            </div> <!-- card-footer -->
        </div> <!-- card -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            refnum : 'REF000-12F',
        }
    }

}
</script>

<style>

</style>
