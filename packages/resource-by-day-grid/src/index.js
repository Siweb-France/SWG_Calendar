import {btnTextDay, btnTextWeek, themeView, viewResources} from '@event-calendar/core';
import TimeGrid from '@event-calendar/time-grid';
import View from './View.svelte';

export default {
    createOptions(options) {
        options.datesAboveResources = false;
        // Common options
        options.buttonText.resourceByDayGridDay = 'resources by day';
        options.buttonText.resourceByDayGridWeek = 'resources by day';
        options.view = 'resourceByDayGridWeek';
        options.views.resourceByDayGridDay = {
            buttonText: btnTextDay,
            component: View,
            duration: {days: 3},
            theme: themeView('ec-time-grid ec-resource-day-view')
        };
        options.views.resourceByDayGridDayCopy = {
            buttonText: btnTextDay,
            component: View,
            duration: {days: 5},
            theme: themeView('ec-time-grid ec-resource-day-view')
        };
        options.views.resourceByDayGridWeek = {
            buttonText: btnTextWeek,
            component: View,
            duration: {weeks: 1},
            theme: themeView('ec-time-grid ec-resource-week-view')
        };
    },

    createStores(state) {
        if (!('_times' in state)) {
            TimeGrid.createStores(state);
        }
        if (!('_viewResources' in state)) {
            state._viewResources = viewResources(state);
        }
    }
}
