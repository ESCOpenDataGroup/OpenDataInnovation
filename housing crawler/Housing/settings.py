# -*- coding: utf-8 -*-

# Scrapy settings for Housing project


BOT_NAME = 'Housing'

SPIDER_MODULES = ['Housing.spiders']
NEWSPIDER_MODULE = 'Housing.spiders'


ROBOTSTXT_OBEY = False

DOWNLOAD_DELAY = 3

SCHEDULER = "scrapy_redis.scheduler.Scheduler"    
DUPEFILTER_CLASS = "scrapy_redis.dupefilter.RFPDupeFilter"  
SCHEDULER_PERSIST = True       
SCHEDULER_QUEUE_CLASS = "scrapy_redis.queue.SpiderQueue"    

ITEM_PIPELINES = {
   'Housing.pipelines.HousingPipeline': 300,
}

MONGODB_HOST = '127.0.0.1'
MONGODB_PORT = 27017
MONGODB_DBNAME = "Housing"
MONGODB_DOCNAME = "saveinfo_5"
