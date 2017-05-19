# -*- coding: utf-8 -*-

import scrapy


class HousingItem(scrapy.Item):
    
    title = scrapy.Field()
    community = scrapy.Field()
    model = scrapy.Field()
    area = scrapy.Field()
    focus_num = scrapy.Field()
    watch_num = scrapy.Field()
    time = scrapy.Field()
    price = scrapy.Field()
    average_price = scrapy.Field()
    link = scrapy.Field()
    Latitude = scrapy.Field()
    city = scrapy.Field()
