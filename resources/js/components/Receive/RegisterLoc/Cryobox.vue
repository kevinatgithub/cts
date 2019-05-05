<template>
    <div>
        <div class="card text-white border-danger bg-danger">
            <div class="card-header">
                <div class="form-group">
                    <div class="row mt-3">
                        <label class="col-sm-4" for="inputDefault"><h5>Cryobox #:</h5></label>
                        <input type="text" class="form-control col-sm-8" placeholder="Scan/ Enter the Cryobox Serial #" id="inputDefault" v-model="cryoboxnum">
                    </div>
                </div>
            </div> <!-- end card-header -->

            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">1</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">2</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">3</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">4</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">5</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">6</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">7</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">8</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">9</button></div>    
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">10</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">11</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">12</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">13</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">14</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">15</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">16</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">17</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">18</button></div>    
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">19</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">20</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">21</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">22</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">23</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">24</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">25</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">26</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">27</button></div>    
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">28</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">29</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">30</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">31</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">32</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">33</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">34</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">35</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">36</button></div>    
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">37</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">38</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">39</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">40</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">41</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">42</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">43</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">44</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">45</button></div>    
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">46</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">47</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">48</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">49</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">50</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">51</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">52</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">53</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">54</button></div>    
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">55</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">56</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">57</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">58</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">59</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">60</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">61</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">62</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">63</button></div>    
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">64</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">65</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">66</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">67</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">68</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">60</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">70</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">71</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">72</button></div>    
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">73</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">74</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">75</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">76</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">77</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">78</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">79</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">80</button></div>
                        <div class="col-1 ml-2"><button type="button" class="btn btn-outline-info">81</button></div>    
                    </div>
                </li>
                
            </ul> <!-- list group -->
            <div class="card-body bg-light text-center">
                <a href="#" class="card-link">prev</a>
                <a href="#" class="card-link">next</a>
            </div> <!-- card-body -->
            <div class="card-footer text-center">
                {{cryoboxnum}}
            </div> <!-- card-footer -->
        </div> <!-- card cryobox-->
       
         
    </div>
</template>

<script>
export default {
    data(){
        return{
            cryoboxnum : '19-017',
        }
    }
}
</script>

<style>

</style>

