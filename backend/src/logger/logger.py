from src.config import LOG_PATH
import logging


log_path = LOG_PATH
log_name = 'logs.log'
format_string = '%(asctime)s: %(levelname)s: %(message)s'

logging.basicConfig(
    format=format_string,
    level=logging.DEBUG,
    datefmt='%m/%d/%Y %I:%M:%S %p'
)

logger = logging.getLogger()

file_handler = logging.FileHandler(filename=f'{log_path}{log_name}', mode='w')
file_handler.setLevel(logging.DEBUG)
file_handler.setFormatter(logging.Formatter(format_string))
logger.addHandler(file_handler)

