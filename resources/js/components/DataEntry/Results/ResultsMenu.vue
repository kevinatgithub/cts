<template>
    <div>
        <b-card class="mt-3" bg-variant="dark" header-text-variant="light" text-variant="light" title="Test Result not set">
            <b-card-text><i class="fa fa-info-circle"></i> Results has not been set yet</b-card-text>
            <b-button variant="primary" size="sm" v-b-modal.test-protocol>Submit Results</b-button>
        </b-card>

        <b-modal id="test-protocol" header-bg-variant="primary" header-text-variant="white" title="Select Test Protocol">
            <b-list-group class="text-center">
                <b-list-group-item href="#" v-b-modal.bsf-protocol @click="$bvModal.hide('test-protocol')">BSF Test Protocol</b-list-group-item>
                <b-list-group-item href="#">NRL HIV Protocol</b-list-group-item>
                <b-list-group-item href="#">NRL HBV Protocol</b-list-group-item>
                <b-list-group-item href="#">NRL HCV Protocol</b-list-group-item>
                <b-list-group-item href="#">NRL MAL Protocol</b-list-group-item>
                <b-list-group-item href="#">NRL SYP Protocol</b-list-group-item>
            </b-list-group>
        </b-modal>

        <b-modal id="bsf-protocol" size="lg" header-bg-variant="dark" header-text-variant="white" title="BSF Test Protocol">
            <bsf-protocol></bsf-protocol>
        </b-modal>
    </div>
</template>
<script>
import BsfProtocol from './ResultEntry/BsfProtocol/BsfProtocol'
export default {
    components : {BsfProtocol},
    props : ['referral']
}
</script>
