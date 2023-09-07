<template>
    <div class="staffs">
        <div v-for="(item, index) in staff.staff" class="staffs_category">
            <h3 class="staffs_category_ttl">{{index}}</h3>
            <ul :class="['staffs_category_list', {'is-one': item.length === 1}]">
                <li v-for="(staff, i) in item" :class="['staffs_category_item', index !== '当日スタッフ' ? '' : 'staffs_category_item-volunteer', {'is-one': item.length === 1}]">
                    <a :href="staff.url" target="_blank" v-if="staff.url">
                        <p :class="['staffs_visual staffs_visual-' + i % 4, index !== '当日スタッフ' ? '' : 'staffs_visual-volunteer']" v-if="staff.avatar_url"><img :src="staff.avatar_url" :alt="staff.name"></p>
                        <p :class="['staffs_visual staffs_visual-' + i % 4, index !== '当日スタッフ' ? '' : 'staffs_visual-volunteer']" v-else>{{staff.name.charAt(0)}}</p>
                        <p class="staffs_name" v-if="index !== '当日スタッフ'">{{staff.name}}</p>
                    </a>
                    <div v-else>
                        <p :class="['staffs_visual staffs_visual-' + i % 4, index !== '当日スタッフ' ? '' : 'staffs_visual-volunteer']" v-if="staff.avatar_url"><img :src="staff.avatar_url" :alt="staff.name"></p>
                        <p :class="['staffs_visual staffs_visual-' + i % 4, index !== '当日スタッフ' ? '' : 'staffs_visual-volunteer']" v-else>{{staff.name.charAt(0)}}</p>
                        <p class="staffs_name" v-if="index !== '当日スタッフ'">{{staff.name}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  props: ['staff']
}
</script>

<style lang="scss" scoped>
.staffs {
    &_category {
        margin-top: 60px;
        @include sm-screen {
            margin-top: (120 / 750 * 100vw);
        }
        &:first-child {
            margin-top: 0;
        }
        &_ttl {
            font-size: 1.8rem;
            text-align: center;
            @include sm-screen {
                font-size: 3.6rem;
            }
        }
        &_list {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            margin-left: -20px;
            @include sm-screen {
                margin: 0 0 0 (-40 / 750 * 100vw);
                width: ((630 + 40) / 750 * 100vw);
            }
            &.is-one {
                margin: 0 auto;
                width: 142px;
                @include sm-screen {
                    margin: 0 auto;
                    width: (183 / 750 * 100vw);
                }
            }
        }
        &_item {
            width: 142px;
            margin-top: 30px;
            margin-left: 20px;
            @include sm-screen {
                width: (183 / 750 * 100vw);
                margin-top: (40 / 750 * 100vw);
                margin-left: (40 / 750 * 100vw);
            }
            &.is-one {
                margin: 30px 0 0;
                @include sm-screen {
                    margin-left: 0;
                }
            }
            &-volunteer {
                width: 110px;
                @include sm-screen {
                    width: (126 / 750 * 100vw);
                }
            }
            > a {
                text-decoration: none;
                color: $Link;
            }
        }
    }
    &_visual {
        text-transform: uppercase;
        display: block;
        background: $White;
        border: 1px solid $TextSecondary;
        position: relative;
        width: 142px;
        height: 142px;
        color: $Link;
        text-decoration: none;
        font-size: (1.6rem * 3);
        text-align: center;
        overflow: hidden;
        border-radius: 50%;
        line-height: 142px;
        color: $White;
        font-weight: 700;
        @include sm-screen {
            width: (183 / 750 * 100vw);
            height: (183 / 750 * 100vw);
            line-height: (183 / 750 * 100vw);
            font-size: (2.4rem * 3);
        }
        &-0 {
            background-color: $Primary;
        }
        &-1 {
            background-color: $Secondary;
        }
        &-2 {
            background-color: $Tertiary;
        }
        &-3 {
            background-color: $Quaternary;
        }
        &-volunteer {
            width: 110px;
            height: 110px;
            line-height: 110px;
            font-size: (1.4rem * 3);
            @include sm-screen {
                width: (126 / 750 * 100vw);
                height: (126 / 750 * 100vw);
                line-height: (126 / 750 * 100vw);
                font-size: (1.8rem * 3);
            }
        }
        > img {
            width: 100%;
            height: auto;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            right: 0;
            margin: 0 auto;
        }
    }
    &_name {
        text-align: center;
        font-size: 1.6rem;
        margin-top: 20px;
            @include sm-screen {
                font-size: 2.4rem;
                margin-top: (20 / 750 * 100vw);
            }
    }
}
</style>